import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-uk');
}

export default function PvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-uk" />;
}
