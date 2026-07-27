import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-status-uk');
}

export default function PvpStatusUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-status-uk" />;
}
