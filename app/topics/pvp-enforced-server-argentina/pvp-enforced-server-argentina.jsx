import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-argentina');
}

export default function PvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-argentina" />;
}
