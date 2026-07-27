import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-13-real-map-servers');
}

export default function Neprenia13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-13-real-map-servers" />;
}
