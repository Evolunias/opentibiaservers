import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-14-real-map-servers');
}

export default function Neprenia14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-14-real-map-servers" />;
}
