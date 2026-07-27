import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-north-america');
}

export default function PvpEnforcedOtServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-north-america" />;
}
