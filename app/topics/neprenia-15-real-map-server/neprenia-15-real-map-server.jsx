import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-15-real-map-server');
}

export default function Neprenia15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-15-real-map-server" />;
}
