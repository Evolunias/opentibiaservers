import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-canob-official');
}

export default function RealMapCanobOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-canob-official" />;
}
