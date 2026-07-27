import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-season-sweden');
}

export default function RealMapSeasonSwedenKeywordPage() {
  return <StaticKeywordPage slug="real-map-season-sweden" />;
}
