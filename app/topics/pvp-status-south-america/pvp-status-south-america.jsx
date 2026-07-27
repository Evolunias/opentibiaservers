import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-status-south-america');
}

export default function PvpStatusSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-status-south-america" />;
}
