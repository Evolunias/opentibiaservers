import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-real-map-register');
}

export default function Tibia772RealMapRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-real-map-register" />;
}
