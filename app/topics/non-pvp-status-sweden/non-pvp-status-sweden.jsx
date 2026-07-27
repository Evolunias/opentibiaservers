import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-status-sweden');
}

export default function NonPvpStatusSwedenKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-status-sweden" />;
}
