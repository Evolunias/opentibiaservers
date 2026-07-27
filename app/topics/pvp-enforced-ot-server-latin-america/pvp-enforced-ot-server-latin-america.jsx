import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-latin-america');
}

export default function PvpEnforcedOtServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-latin-america" />;
}
