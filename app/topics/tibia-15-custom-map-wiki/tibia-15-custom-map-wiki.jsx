import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-custom-map-wiki');
}

export default function Tibia15CustomMapWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-custom-map-wiki" />;
}
