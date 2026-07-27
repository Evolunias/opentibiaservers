import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-fresh-start-wiki');
}

export default function Tibia11FreshStartWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-fresh-start-wiki" />;
}
