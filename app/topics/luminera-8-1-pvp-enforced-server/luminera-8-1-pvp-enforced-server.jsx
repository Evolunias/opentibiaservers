import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-1-pvp-enforced-server');
}

export default function Luminera81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-1-pvp-enforced-server" />;
}
