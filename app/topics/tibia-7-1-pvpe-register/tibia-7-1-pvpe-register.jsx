import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvpe-register');
}

export default function Tibia71PvpeRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvpe-register" />;
}
