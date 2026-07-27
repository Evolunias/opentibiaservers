import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-low-exp-server-north-america');
}

export default function UnlineLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-low-exp-server-north-america" />;
}
