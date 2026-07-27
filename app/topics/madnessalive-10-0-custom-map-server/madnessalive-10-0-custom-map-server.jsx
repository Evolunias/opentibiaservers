import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-10-0-custom-map-server');
}

export default function Madnessalive100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-10-0-custom-map-server" />;
}
