import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-status-north-america');
}

export default function NonPvpStatusNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-status-north-america" />;
}
