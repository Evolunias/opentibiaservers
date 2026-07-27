import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvpe-register');
}

export default function Tibia86PvpeRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvpe-register" />;
}
