import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-enforced-server-usa');
}

export default function NilotPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-enforced-server-usa" />;
}
