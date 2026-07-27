import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-servers-argentina');
}

export default function PvpEnforcedServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-servers-argentina" />;
}
