import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-real-map-register');
}

export default function Tibia11RealMapRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-real-map-register" />;
}
