import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-register-brazil');
}

export default function RealMapRegisterBrazilKeywordPage() {
  return <StaticKeywordPage slug="real-map-register-brazil" />;
}
