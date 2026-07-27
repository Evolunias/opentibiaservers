import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-enforced-register');
}

export default function Tibia12PvpEnforcedRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-enforced-register" />;
}
