import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-status-poland');
}

export default function NonPvpStatusPolandKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-status-poland" />;
}
