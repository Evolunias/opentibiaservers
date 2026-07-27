import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-10-98-pvp-enforced-server');
}

export default function Nostalther1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-10-98-pvp-enforced-server" />;
}
