import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-north-america');
}

export default function PvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-north-america" />;
}
