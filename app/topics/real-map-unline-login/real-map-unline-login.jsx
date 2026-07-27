import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-unline-login');
}

export default function RealMapUnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-unline-login" />;
}
