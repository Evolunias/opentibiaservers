import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-status-argentina');
}

export default function NonPvpStatusArgentinaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-status-argentina" />;
}
