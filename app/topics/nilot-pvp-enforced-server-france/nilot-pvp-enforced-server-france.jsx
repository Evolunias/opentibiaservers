import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-enforced-server-france');
}

export default function NilotPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-enforced-server-france" />;
}
