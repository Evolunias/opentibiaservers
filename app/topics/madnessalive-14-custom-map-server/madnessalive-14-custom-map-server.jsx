import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-14-custom-map-server');
}

export default function Madnessalive14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-14-custom-map-server" />;
}
