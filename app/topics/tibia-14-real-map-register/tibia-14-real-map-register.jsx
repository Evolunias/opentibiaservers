import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-real-map-register');
}

export default function Tibia14RealMapRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-real-map-register" />;
}
