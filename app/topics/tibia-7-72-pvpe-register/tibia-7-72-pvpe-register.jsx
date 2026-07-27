import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-pvpe-register');
}

export default function Tibia772PvpeRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-pvpe-register" />;
}
