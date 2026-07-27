import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-servers-poland');
}

export default function KasteriaRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-servers-poland" />;
}
