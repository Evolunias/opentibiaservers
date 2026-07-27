import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-4-real-map-servers');
}

export default function Neprenia74RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-4-real-map-servers" />;
}
