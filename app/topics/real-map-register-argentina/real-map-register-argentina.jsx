import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-register-argentina');
}

export default function RealMapRegisterArgentinaKeywordPage() {
  return <StaticKeywordPage slug="real-map-register-argentina" />;
}
