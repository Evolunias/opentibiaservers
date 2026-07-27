import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-fresh-start-wiki');
}

export default function Tibia74FreshStartWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-fresh-start-wiki" />;
}
