import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-15-real-map-servers');
}

export default function Neprenia15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-15-real-map-servers" />;
}
