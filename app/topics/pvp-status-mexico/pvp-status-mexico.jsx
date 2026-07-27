import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-status-mexico');
}

export default function PvpStatusMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-status-mexico" />;
}
