import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvp-register');
}

export default function Tibia854PvpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvp-register" />;
}
