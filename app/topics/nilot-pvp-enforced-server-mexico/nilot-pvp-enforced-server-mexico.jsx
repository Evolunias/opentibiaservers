import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-enforced-server-mexico');
}

export default function NilotPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-enforced-server-mexico" />;
}
