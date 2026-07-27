import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-fresh-start-wiki');
}

export default function Tibia86FreshStartWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-fresh-start-wiki" />;
}
