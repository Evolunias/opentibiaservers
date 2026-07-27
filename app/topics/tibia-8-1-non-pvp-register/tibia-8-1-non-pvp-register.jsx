import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-non-pvp-register');
}

export default function Tibia81NonPvpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-non-pvp-register" />;
}
