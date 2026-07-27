import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-status-france');
}

export default function PvpStatusFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-status-france" />;
}
