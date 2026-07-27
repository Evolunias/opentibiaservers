import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-custom-map-wiki');
}

export default function Tibia13CustomMapWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-custom-map-wiki" />;
}
