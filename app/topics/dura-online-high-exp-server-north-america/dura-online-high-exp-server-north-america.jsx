import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-high-exp-server-north-america');
}

export default function DuraOnlineHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-high-exp-server-north-america" />;
}
