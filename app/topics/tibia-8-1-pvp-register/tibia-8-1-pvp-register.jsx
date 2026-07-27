import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvp-register');
}

export default function Tibia81PvpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvp-register" />;
}
