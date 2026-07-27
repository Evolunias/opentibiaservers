import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-high-exp-server-latin-america');
}

export default function OriginaltibiaHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-high-exp-server-latin-america" />;
}
