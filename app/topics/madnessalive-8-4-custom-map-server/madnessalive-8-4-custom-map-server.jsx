import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-4-custom-map-server');
}

export default function Madnessalive84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-4-custom-map-server" />;
}
