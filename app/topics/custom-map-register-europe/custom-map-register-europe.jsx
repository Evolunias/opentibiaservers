import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-register-europe');
}

export default function CustomMapRegisterEuropeKeywordPage() {
  return <StaticKeywordPage slug="custom-map-register-europe" />;
}
