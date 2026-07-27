import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-arcaniarl-official');
}

export default function RealMapArcaniarlOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-arcaniarl-official" />;
}
