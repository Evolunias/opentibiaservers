import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-servers-germany');
}

export default function NepreniaRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-servers-germany" />;
}
