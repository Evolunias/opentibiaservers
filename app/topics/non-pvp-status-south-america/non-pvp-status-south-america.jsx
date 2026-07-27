import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-status-south-america');
}

export default function NonPvpStatusSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-status-south-america" />;
}
