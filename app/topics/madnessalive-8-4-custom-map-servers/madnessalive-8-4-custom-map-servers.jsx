import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-4-custom-map-servers');
}

export default function Madnessalive84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-4-custom-map-servers" />;
}
