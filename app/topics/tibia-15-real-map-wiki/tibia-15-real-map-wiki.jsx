import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-real-map-wiki');
}

export default function Tibia15RealMapWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-real-map-wiki" />;
}
