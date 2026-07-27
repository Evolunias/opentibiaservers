import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvp-register');
}

export default function Tibia86PvpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvp-register" />;
}
