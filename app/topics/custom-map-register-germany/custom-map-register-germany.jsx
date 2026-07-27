import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-register-germany');
}

export default function CustomMapRegisterGermanyKeywordPage() {
  return <StaticKeywordPage slug="custom-map-register-germany" />;
}
