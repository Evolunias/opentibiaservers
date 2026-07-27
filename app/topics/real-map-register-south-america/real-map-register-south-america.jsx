import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-register-south-america');
}

export default function RealMapRegisterSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-register-south-america" />;
}
