import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-enforced-server-europe');
}

export default function NilotPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-enforced-server-europe" />;
}
