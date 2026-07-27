import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-high-exp-server-latin-america');
}

export default function DuraOnlineHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-high-exp-server-latin-america" />;
}
