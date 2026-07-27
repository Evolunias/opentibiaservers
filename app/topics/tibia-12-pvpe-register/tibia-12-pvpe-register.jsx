import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvpe-register');
}

export default function Tibia12PvpeRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvpe-register" />;
}
