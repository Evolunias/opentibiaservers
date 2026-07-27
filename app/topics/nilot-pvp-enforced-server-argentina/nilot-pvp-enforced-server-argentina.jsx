import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-enforced-server-argentina');
}

export default function NilotPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-enforced-server-argentina" />;
}
