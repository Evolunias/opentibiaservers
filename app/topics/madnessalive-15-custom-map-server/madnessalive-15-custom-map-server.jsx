import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-15-custom-map-server');
}

export default function Madnessalive15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-15-custom-map-server" />;
}
