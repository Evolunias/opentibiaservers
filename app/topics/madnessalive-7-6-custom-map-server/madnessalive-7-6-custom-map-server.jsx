import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-6-custom-map-server');
}

export default function Madnessalive76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-6-custom-map-server" />;
}
