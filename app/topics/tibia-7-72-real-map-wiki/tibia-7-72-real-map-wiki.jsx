import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-real-map-wiki');
}

export default function Tibia772RealMapWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-real-map-wiki" />;
}
