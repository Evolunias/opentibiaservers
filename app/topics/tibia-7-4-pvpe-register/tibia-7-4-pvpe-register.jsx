import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvpe-register');
}

export default function Tibia74PvpeRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvpe-register" />;
}
