import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-client-north-america');
}

export default function PvpEnforcedClientNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-client-north-america" />;
}
