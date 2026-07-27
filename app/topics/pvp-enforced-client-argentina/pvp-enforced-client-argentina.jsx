import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-client-argentina');
}

export default function PvpEnforcedClientArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-client-argentina" />;
}
