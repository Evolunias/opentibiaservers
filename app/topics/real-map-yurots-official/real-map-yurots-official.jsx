import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-yurots-official');
}

export default function RealMapYurotsOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-yurots-official" />;
}
