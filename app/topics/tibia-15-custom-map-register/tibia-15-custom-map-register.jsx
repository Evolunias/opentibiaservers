import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-custom-map-register');
}

export default function Tibia15CustomMapRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-custom-map-register" />;
}
