import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-register');
}

export default function Tibia14PvpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-register" />;
}
