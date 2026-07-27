import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-real-map-register');
}

export default function Tibia100RealMapRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-real-map-register" />;
}
