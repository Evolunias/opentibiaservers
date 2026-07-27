import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-neprenia-official');
}

export default function RealMapNepreniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-neprenia-official" />;
}
