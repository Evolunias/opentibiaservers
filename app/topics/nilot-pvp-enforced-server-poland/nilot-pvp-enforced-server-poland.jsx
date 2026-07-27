import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-enforced-server-poland');
}

export default function NilotPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-enforced-server-poland" />;
}
