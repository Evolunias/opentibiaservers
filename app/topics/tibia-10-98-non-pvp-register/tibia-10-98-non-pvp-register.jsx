import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-non-pvp-register');
}

export default function Tibia1098NonPvpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-non-pvp-register" />;
}
