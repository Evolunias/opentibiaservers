import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-status-uk');
}

export default function NonPvpStatusUkKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-status-uk" />;
}
