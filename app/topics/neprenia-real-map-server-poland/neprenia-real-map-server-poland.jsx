import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-server-poland');
}

export default function NepreniaRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-server-poland" />;
}
