import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-register-argentina');
}

export default function CustomMapRegisterArgentinaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-register-argentina" />;
}
