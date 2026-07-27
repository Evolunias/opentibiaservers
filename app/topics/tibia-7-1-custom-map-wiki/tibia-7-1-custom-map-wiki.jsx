import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-custom-map-wiki');
}

export default function Tibia71CustomMapWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-custom-map-wiki" />;
}
