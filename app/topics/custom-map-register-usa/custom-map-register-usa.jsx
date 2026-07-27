import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-register-usa');
}

export default function CustomMapRegisterUsaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-register-usa" />;
}
