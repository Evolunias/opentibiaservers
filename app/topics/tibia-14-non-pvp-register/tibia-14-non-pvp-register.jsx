import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-non-pvp-register');
}

export default function Tibia14NonPvpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-non-pvp-register" />;
}
