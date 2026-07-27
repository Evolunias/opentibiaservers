import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-15-pvp-enforced-server');
}

export default function Luminera15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-15-pvp-enforced-server" />;
}
