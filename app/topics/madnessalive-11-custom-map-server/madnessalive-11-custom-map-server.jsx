import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-11-custom-map-server');
}

export default function Madnessalive11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-11-custom-map-server" />;
}
