import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-server-germany');
}

export default function NepreniaRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-server-germany" />;
}
