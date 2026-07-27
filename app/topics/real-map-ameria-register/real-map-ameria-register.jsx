import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ameria-register');
}

export default function RealMapAmeriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-ameria-register" />;
}
