import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-6-pvp-enforced-server');
}

export default function Nilot86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-6-pvp-enforced-server" />;
}
