import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-servers-europe');
}

export default function NepreniaRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-servers-europe" />;
}
