import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-register-mexico');
}

export default function CustomMapRegisterMexicoKeywordPage() {
  return <StaticKeywordPage slug="custom-map-register-mexico" />;
}
