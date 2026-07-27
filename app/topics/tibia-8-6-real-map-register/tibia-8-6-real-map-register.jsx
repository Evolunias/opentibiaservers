import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-real-map-register');
}

export default function Tibia86RealMapRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-real-map-register" />;
}
