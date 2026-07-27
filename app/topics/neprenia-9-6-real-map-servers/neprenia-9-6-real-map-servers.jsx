import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-9-6-real-map-servers');
}

export default function Neprenia96RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-9-6-real-map-servers" />;
}
