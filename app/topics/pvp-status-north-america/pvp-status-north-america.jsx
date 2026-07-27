import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-status-north-america');
}

export default function PvpStatusNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-status-north-america" />;
}
