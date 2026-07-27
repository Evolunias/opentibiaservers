import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-status-europe');
}

export default function NonPvpStatusEuropeKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-status-europe" />;
}
