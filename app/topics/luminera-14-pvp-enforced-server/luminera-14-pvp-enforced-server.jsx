import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-14-pvp-enforced-server');
}

export default function Luminera14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-14-pvp-enforced-server" />;
}
