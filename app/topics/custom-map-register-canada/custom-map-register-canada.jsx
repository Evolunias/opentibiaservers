import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-register-canada');
}

export default function CustomMapRegisterCanadaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-register-canada" />;
}
