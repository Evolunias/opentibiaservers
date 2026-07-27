import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-ot-server-brazil');
}

export default function PvpOtServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-ot-server-brazil" />;
}
