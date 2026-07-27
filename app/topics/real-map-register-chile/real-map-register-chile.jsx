import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-register-chile');
}

export default function RealMapRegisterChileKeywordPage() {
  return <StaticKeywordPage slug="real-map-register-chile" />;
}
