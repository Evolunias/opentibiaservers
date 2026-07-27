import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-1-pvp-enforced-server');
}

export default function Luminera71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-1-pvp-enforced-server" />;
}
