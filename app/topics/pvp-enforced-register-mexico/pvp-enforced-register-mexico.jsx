import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-register-mexico');
}

export default function PvpEnforcedRegisterMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-register-mexico" />;
}
