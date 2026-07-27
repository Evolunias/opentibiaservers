import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-11-real-map-servers');
}

export default function Neprenia11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-11-real-map-servers" />;
}
