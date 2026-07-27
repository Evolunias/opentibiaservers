import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-real-map-register');
}

export default function Tibia74RealMapRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-real-map-register" />;
}
