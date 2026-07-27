import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-11-pvp-enforced-server');
}

export default function Nilot11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-11-pvp-enforced-server" />;
}
