import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-fresh-start-wiki');
}

export default function Tibia14FreshStartWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-fresh-start-wiki" />;
}
