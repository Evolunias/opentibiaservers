import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-status-usa');
}

export default function NonPvpStatusUsaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-status-usa" />;
}
