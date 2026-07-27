import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvpe-register');
}

export default function Tibia96PvpeRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvpe-register" />;
}
