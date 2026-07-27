import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-servers-poland');
}

export default function AlasteraRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-servers-poland" />;
}
