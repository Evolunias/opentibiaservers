import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-register-north-america');
}

export default function CustomMapRegisterNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-register-north-america" />;
}
