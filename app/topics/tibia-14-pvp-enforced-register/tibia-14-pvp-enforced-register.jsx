import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-enforced-register');
}

export default function Tibia14PvpEnforcedRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-enforced-register" />;
}
