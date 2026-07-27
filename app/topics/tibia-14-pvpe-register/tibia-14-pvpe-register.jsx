import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvpe-register');
}

export default function Tibia14PvpeRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvpe-register" />;
}
