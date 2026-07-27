import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-servers-uk');
}

export default function NepreniaRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-servers-uk" />;
}
