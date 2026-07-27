import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-register-latin-america');
}

export default function CustomMapRegisterLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-register-latin-america" />;
}
