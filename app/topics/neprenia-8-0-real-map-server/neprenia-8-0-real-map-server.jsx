import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-0-real-map-server');
}

export default function Neprenia80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-0-real-map-server" />;
}
