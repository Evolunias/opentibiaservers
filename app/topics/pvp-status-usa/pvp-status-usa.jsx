import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-status-usa');
}

export default function PvpStatusUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-status-usa" />;
}
