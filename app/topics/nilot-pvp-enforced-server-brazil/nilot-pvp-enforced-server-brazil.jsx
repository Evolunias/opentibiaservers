import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-enforced-server-brazil');
}

export default function NilotPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-enforced-server-brazil" />;
}
