import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-status-germany');
}

export default function NonPvpStatusGermanyKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-status-germany" />;
}
