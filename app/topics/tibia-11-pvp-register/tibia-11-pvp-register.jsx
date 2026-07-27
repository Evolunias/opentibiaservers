import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-register');
}

export default function Tibia11PvpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-register" />;
}
