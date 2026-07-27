import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-9-6-pvp-enforced-server');
}

export default function Nostalther96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-9-6-pvp-enforced-server" />;
}
