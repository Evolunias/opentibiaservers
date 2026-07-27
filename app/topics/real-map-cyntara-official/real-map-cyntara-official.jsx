import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-cyntara-official');
}

export default function RealMapCyntaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-cyntara-official" />;
}
