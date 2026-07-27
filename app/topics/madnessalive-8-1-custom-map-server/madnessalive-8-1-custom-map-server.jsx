import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-1-custom-map-server');
}

export default function Madnessalive81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-1-custom-map-server" />;
}
