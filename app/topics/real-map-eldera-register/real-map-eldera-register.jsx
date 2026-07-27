import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eldera-register');
}

export default function RealMapElderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-eldera-register" />;
}
