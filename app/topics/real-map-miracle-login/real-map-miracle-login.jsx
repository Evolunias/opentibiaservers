import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-miracle-login');
}

export default function RealMapMiracleLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-miracle-login" />;
}
