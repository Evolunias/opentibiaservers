import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolera-register');
}

export default function RealMapEvoleraRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolera-register" />;
}
