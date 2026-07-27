import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-cyntara-register');
}

export default function RealMapCyntaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-cyntara-register" />;
}
