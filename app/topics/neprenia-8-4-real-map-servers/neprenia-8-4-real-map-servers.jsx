import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-4-real-map-servers');
}

export default function Neprenia84RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-4-real-map-servers" />;
}
