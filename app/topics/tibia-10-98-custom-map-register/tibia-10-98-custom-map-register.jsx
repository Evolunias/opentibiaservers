import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-custom-map-register');
}

export default function Tibia1098CustomMapRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-custom-map-register" />;
}
