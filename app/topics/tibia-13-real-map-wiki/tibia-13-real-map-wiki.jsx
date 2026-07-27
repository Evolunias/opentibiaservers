import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-real-map-wiki');
}

export default function Tibia13RealMapWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-real-map-wiki" />;
}
