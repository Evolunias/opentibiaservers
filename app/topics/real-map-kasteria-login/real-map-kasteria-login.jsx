import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-kasteria-login');
}

export default function RealMapKasteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-kasteria-login" />;
}
