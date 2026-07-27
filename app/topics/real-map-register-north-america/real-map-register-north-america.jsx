import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-register-north-america');
}

export default function RealMapRegisterNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-register-north-america" />;
}
