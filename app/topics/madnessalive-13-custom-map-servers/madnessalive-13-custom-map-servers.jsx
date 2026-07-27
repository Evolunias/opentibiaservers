import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-13-custom-map-servers');
}

export default function Madnessalive13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-13-custom-map-servers" />;
}
