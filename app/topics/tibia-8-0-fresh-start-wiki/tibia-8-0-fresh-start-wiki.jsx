import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-fresh-start-wiki');
}

export default function Tibia80FreshStartWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-fresh-start-wiki" />;
}
