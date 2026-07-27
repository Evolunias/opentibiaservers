import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-custom-map-wiki');
}

export default function Tibia96CustomMapWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-custom-map-wiki" />;
}
