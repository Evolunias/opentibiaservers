import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-custom-map-register');
}

export default function Tibia11CustomMapRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-custom-map-register" />;
}
