import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-enforced-server-north-america');
}

export default function NilotPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-enforced-server-north-america" />;
}
