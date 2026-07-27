import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvp-enforced-register');
}

export default function Tibia74PvpEnforcedRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvp-enforced-register" />;
}
