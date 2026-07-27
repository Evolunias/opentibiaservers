import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-client-poland');
}

export default function PvpEnforcedClientPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-client-poland" />;
}
