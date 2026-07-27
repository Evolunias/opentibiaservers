import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-servers-latin-america');
}

export default function PvpEnforcedServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-servers-latin-america" />;
}
