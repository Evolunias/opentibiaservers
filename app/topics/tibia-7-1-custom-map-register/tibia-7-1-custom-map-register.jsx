import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-custom-map-register');
}

export default function Tibia71CustomMapRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-custom-map-register" />;
}
