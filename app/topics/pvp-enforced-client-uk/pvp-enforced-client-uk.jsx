import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-client-uk');
}

export default function PvpEnforcedClientUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-client-uk" />;
}
