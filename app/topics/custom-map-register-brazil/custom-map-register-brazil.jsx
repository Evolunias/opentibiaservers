import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-register-brazil');
}

export default function CustomMapRegisterBrazilKeywordPage() {
  return <StaticKeywordPage slug="custom-map-register-brazil" />;
}
