import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-1-real-map-servers');
}

export default function Neprenia71RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-1-real-map-servers" />;
}
