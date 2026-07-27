import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibianus-official');
}

export default function RealMapTibianusOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibianus-official" />;
}
