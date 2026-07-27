import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-real-map-register');
}

export default function Tibia12RealMapRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-real-map-register" />;
}
