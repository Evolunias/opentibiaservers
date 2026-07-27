import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-xanteria-register');
}

export default function RealMapXanteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-xanteria-register" />;
}
