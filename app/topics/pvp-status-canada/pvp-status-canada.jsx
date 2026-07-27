import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-status-canada');
}

export default function PvpStatusCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-status-canada" />;
}
