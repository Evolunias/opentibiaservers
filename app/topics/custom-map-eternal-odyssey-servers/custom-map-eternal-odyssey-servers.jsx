import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-eternal-odyssey-servers');
}

export default function CustomMapEternalOdysseyServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-eternal-odyssey-servers" />;
}
