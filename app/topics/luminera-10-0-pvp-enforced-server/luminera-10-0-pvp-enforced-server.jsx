import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-0-pvp-enforced-server');
}

export default function Luminera100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-0-pvp-enforced-server" />;
}
