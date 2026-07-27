import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-servers-poland');
}

export default function NostaltherRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-servers-poland" />;
}
