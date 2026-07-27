import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-eternal-odyssey-server');
}

export default function CustomMapEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-eternal-odyssey-server" />;
}
