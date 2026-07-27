import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-archlight-official');
}

export default function RealMapArchlightOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-archlight-official" />;
}
