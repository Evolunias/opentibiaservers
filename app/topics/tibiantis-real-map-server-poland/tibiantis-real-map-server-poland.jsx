import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-server-poland');
}

export default function TibiantisRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-server-poland" />;
}
