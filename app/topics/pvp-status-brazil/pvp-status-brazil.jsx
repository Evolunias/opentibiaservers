import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-status-brazil');
}

export default function PvpStatusBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-status-brazil" />;
}
