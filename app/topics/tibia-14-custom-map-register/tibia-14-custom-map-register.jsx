import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-custom-map-register');
}

export default function Tibia14CustomMapRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-custom-map-register" />;
}
