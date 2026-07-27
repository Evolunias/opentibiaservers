import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-real-map-wiki');
}

export default function Tibia96RealMapWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-real-map-wiki" />;
}
