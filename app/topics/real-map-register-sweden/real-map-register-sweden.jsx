import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-register-sweden');
}

export default function RealMapRegisterSwedenKeywordPage() {
  return <StaticKeywordPage slug="real-map-register-sweden" />;
}
