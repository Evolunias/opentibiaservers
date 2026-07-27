import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-real-map-register');
}

export default function Tibia76RealMapRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-real-map-register" />;
}
