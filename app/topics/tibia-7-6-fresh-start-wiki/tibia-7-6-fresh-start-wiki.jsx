import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-fresh-start-wiki');
}

export default function Tibia76FreshStartWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-fresh-start-wiki" />;
}
