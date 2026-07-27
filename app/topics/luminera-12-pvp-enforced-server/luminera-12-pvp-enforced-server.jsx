import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-12-pvp-enforced-server');
}

export default function Luminera12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-12-pvp-enforced-server" />;
}
