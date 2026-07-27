import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-12-custom-map-server');
}

export default function Madnessalive12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-12-custom-map-server" />;
}
