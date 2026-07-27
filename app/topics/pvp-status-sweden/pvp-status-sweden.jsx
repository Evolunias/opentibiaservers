import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-status-sweden');
}

export default function PvpStatusSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-status-sweden" />;
}
