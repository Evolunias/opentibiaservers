import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-13-custom-map-server');
}

export default function Madnessalive13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-13-custom-map-server" />;
}
