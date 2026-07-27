import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-register-sweden');
}

export default function CustomMapRegisterSwedenKeywordPage() {
  return <StaticKeywordPage slug="custom-map-register-sweden" />;
}
