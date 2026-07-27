import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-high-exp-wiki');
}

export default function Tibia11HighExpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-high-exp-wiki" />;
}
