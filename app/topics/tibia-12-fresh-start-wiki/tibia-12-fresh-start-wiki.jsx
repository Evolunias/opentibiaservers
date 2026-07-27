import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-fresh-start-wiki');
}

export default function Tibia12FreshStartWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-fresh-start-wiki" />;
}
