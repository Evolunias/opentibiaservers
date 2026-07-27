import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-fresh-start-wiki');
}

export default function Tibia100FreshStartWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-fresh-start-wiki" />;
}
