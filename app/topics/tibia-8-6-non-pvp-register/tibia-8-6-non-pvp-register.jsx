import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-non-pvp-register');
}

export default function Tibia86NonPvpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-non-pvp-register" />;
}
