import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-11-custom-map-servers');
}

export default function Madnessalive11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-11-custom-map-servers" />;
}
