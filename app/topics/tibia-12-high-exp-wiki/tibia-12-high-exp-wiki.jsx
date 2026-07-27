import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-high-exp-wiki');
}

export default function Tibia12HighExpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-high-exp-wiki" />;
}
