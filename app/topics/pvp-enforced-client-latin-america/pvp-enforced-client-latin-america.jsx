import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-client-latin-america');
}

export default function PvpEnforcedClientLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-client-latin-america" />;
}
