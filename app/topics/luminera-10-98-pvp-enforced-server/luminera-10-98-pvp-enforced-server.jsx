import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-98-pvp-enforced-server');
}

export default function Luminera1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-98-pvp-enforced-server" />;
}
