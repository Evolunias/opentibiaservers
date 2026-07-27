import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-real-map-wiki');
}

export default function Tibia100RealMapWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-real-map-wiki" />;
}
