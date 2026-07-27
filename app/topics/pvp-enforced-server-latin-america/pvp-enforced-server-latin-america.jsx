import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-latin-america');
}

export default function PvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-latin-america" />;
}
