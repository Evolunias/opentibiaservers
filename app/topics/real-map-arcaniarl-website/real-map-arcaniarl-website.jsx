import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-arcaniarl-website');
}

export default function RealMapArcaniarlWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-arcaniarl-website" />;
}
