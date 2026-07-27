import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-client-brazil');
}

export default function PvpEnforcedClientBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-client-brazil" />;
}
