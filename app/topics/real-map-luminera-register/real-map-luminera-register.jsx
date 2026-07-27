import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-luminera-register');
}

export default function RealMapLumineraRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-luminera-register" />;
}
