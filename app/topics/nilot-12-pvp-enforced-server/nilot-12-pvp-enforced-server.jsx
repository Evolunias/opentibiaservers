import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-12-pvp-enforced-server');
}

export default function Nilot12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-12-pvp-enforced-server" />;
}
