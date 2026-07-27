import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-custom-map-wiki');
}

export default function Tibia100CustomMapWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-custom-map-wiki" />;
}
