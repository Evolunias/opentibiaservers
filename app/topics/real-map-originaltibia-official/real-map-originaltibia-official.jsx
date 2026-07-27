import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-originaltibia-official');
}

export default function RealMapOriginaltibiaOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-originaltibia-official" />;
}
