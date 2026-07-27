import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-enforced-server-canada');
}

export default function NilotPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-enforced-server-canada" />;
}
