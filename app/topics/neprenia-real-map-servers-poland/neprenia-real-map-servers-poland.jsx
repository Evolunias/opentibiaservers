import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-servers-poland');
}

export default function NepreniaRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-servers-poland" />;
}
