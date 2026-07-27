import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-coxaot-login');
}

export default function RealMapCoxaotLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-coxaot-login" />;
}
