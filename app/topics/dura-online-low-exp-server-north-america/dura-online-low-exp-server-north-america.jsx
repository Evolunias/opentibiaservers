import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-low-exp-server-north-america');
}

export default function DuraOnlineLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-low-exp-server-north-america" />;
}
