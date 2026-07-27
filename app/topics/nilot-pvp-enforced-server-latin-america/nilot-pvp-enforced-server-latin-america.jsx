import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-enforced-server-latin-america');
}

export default function NilotPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-enforced-server-latin-america" />;
}
