import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-real-map-wiki');
}

export default function Tibia12RealMapWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-real-map-wiki" />;
}
