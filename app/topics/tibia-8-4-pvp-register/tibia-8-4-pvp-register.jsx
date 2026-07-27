import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvp-register');
}

export default function Tibia84PvpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvp-register" />;
}
