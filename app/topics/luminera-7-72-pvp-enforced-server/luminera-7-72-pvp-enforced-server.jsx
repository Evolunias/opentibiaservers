import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-72-pvp-enforced-server');
}

export default function Luminera772PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-72-pvp-enforced-server" />;
}
