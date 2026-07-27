import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-4-custom-map-server');
}

export default function Madnessalive74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-4-custom-map-server" />;
}
