import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-11-pvp-enforced-server');
}

export default function Luminera11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-11-pvp-enforced-server" />;
}
