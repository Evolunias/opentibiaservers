import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-custom-map-wiki');
}

export default function Tibia76CustomMapWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-custom-map-wiki" />;
}
