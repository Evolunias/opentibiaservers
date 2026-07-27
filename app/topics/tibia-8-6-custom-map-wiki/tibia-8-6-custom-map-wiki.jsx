import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-custom-map-wiki');
}

export default function Tibia86CustomMapWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-custom-map-wiki" />;
}
