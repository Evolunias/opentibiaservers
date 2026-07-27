import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-status-europe');
}

export default function PvpStatusEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-status-europe" />;
}
