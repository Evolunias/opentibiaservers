import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-register-latin-america');
}

export default function PvpEnforcedRegisterLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-register-latin-america" />;
}
