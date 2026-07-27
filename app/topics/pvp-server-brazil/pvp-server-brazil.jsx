import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-brazil');
}

export default function PvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-brazil" />;
}
