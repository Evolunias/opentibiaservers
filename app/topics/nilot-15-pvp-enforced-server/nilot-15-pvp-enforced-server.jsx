import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-15-pvp-enforced-server');
}

export default function Nilot15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-15-pvp-enforced-server" />;
}
