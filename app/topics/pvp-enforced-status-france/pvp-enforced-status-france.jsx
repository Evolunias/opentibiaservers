import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-status-france');
}

export default function PvpEnforcedStatusFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-status-france" />;
}
