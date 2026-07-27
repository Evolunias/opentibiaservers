import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvp-register');
}

export default function Tibia100PvpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvp-register" />;
}
