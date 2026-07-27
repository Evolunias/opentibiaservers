import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvpe-register');
}

export default function Tibia84PvpeRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvpe-register" />;
}
