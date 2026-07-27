import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eldera-official');
}

export default function RealMapElderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-eldera-official" />;
}
