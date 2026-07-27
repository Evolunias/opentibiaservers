import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-fresh-start-wiki');
}

export default function Tibia854FreshStartWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-fresh-start-wiki" />;
}
