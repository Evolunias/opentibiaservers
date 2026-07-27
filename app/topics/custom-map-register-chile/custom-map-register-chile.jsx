import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-register-chile');
}

export default function CustomMapRegisterChileKeywordPage() {
  return <StaticKeywordPage slug="custom-map-register-chile" />;
}
