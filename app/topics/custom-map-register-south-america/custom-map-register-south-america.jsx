import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-register-south-america');
}

export default function CustomMapRegisterSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-register-south-america" />;
}
