import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-9-6-pvp-enforced-server');
}

export default function Luminera96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-9-6-pvp-enforced-server" />;
}
