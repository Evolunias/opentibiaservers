import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-servers-poland');
}

export default function TibiantisRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-servers-poland" />;
}
