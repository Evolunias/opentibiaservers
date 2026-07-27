import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-register-poland');
}

export default function CustomMapRegisterPolandKeywordPage() {
  return <StaticKeywordPage slug="custom-map-register-poland" />;
}
