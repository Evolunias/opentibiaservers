import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-non-pvp-register');
}

export default function Tibia15NonPvpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-non-pvp-register" />;
}
