import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-client-germany');
}

export default function PvpEnforcedClientGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-client-germany" />;
}
