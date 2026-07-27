import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-register');
}

export default function Tibia12PvpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-register" />;
}
