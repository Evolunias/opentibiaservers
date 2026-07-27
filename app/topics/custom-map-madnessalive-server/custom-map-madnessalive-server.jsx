import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-madnessalive-server');
}

export default function CustomMapMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-madnessalive-server" />;
}
