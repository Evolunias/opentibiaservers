import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-real-map-register');
}

export default function Tibia84RealMapRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-real-map-register" />;
}
