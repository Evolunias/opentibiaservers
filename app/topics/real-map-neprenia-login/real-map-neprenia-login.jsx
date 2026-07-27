import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-neprenia-login');
}

export default function RealMapNepreniaLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-neprenia-login" />;
}
