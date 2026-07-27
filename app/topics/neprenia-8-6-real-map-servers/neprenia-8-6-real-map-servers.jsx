import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-6-real-map-servers');
}

export default function Neprenia86RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-6-real-map-servers" />;
}
