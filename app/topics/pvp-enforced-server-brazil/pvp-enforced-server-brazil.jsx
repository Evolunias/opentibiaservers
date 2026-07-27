import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-brazil');
}

export default function PvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-brazil" />;
}
