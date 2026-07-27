import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-status-mexico');
}

export default function NonPvpStatusMexicoKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-status-mexico" />;
}
