import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvpe-register');
}

export default function Tibia76PvpeRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvpe-register" />;
}
