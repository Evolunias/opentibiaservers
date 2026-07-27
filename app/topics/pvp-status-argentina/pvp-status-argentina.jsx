import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-status-argentina');
}

export default function PvpStatusArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-status-argentina" />;
}
