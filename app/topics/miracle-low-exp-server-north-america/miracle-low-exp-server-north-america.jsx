import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-low-exp-server-north-america');
}

export default function MiracleLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-low-exp-server-north-america" />;
}
