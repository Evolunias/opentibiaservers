import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvp-enforced-register');
}

export default function Tibia13PvpEnforcedRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvp-enforced-register" />;
}
