import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-custom-map-register');
}

export default function Tibia100CustomMapRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-custom-map-register" />;
}
