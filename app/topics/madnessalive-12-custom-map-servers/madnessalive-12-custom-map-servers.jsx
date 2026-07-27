import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-12-custom-map-servers');
}

export default function Madnessalive12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-12-custom-map-servers" />;
}
