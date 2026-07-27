import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-enforced-server-south-america');
}

export default function NilotPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-enforced-server-south-america" />;
}
