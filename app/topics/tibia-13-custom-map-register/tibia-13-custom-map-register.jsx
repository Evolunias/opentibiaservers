import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-custom-map-register');
}

export default function Tibia13CustomMapRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-custom-map-register" />;
}
