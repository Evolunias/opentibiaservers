import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-enforced-server-germany');
}

export default function NilotPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-enforced-server-germany" />;
}
