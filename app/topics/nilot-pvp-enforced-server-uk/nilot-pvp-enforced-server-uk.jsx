import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-enforced-server-uk');
}

export default function NilotPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-enforced-server-uk" />;
}
