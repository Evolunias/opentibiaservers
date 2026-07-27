import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-status-germany');
}

export default function PvpStatusGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-status-germany" />;
}
