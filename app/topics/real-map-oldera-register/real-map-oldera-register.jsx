import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oldera-register');
}

export default function RealMapOlderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-oldera-register" />;
}
