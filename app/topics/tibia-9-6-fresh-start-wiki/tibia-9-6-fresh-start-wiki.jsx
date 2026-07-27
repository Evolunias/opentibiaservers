import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-fresh-start-wiki');
}

export default function Tibia96FreshStartWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-fresh-start-wiki" />;
}
