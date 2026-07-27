import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-real-map-wiki');
}

export default function Tibia11RealMapWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-real-map-wiki" />;
}
