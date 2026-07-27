import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-13-pvp-enforced-server');
}

export default function Luminera13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-13-pvp-enforced-server" />;
}
