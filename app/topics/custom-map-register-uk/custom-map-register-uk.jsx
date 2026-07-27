import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-register-uk');
}

export default function CustomMapRegisterUkKeywordPage() {
  return <StaticKeywordPage slug="custom-map-register-uk" />;
}
