import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-enforced-register');
}

export default function Tibia11PvpEnforcedRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-enforced-register" />;
}
