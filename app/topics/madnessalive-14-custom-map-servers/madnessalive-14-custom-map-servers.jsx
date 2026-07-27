import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-14-custom-map-servers');
}

export default function Madnessalive14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-14-custom-map-servers" />;
}
