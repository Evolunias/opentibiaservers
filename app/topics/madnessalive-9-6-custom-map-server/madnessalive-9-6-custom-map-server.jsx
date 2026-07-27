import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-9-6-custom-map-server');
}

export default function Madnessalive96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-9-6-custom-map-server" />;
}
