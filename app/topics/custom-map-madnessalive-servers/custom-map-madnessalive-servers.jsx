import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-madnessalive-servers');
}

export default function CustomMapMadnessaliveServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-madnessalive-servers" />;
}
