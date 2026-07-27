import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-status-canada');
}

export default function NonPvpStatusCanadaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-status-canada" />;
}
