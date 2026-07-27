import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-fresh-start-wiki');
}

export default function Tibia15FreshStartWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-fresh-start-wiki" />;
}
