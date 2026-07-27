import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-12-real-map-servers');
}

export default function Neprenia12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-12-real-map-servers" />;
}
