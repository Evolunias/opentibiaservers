import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-non-pvp-register');
}

export default function Tibia11NonPvpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-non-pvp-register" />;
}
