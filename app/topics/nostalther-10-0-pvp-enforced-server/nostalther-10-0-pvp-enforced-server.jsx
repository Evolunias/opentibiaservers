import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-10-0-pvp-enforced-server');
}

export default function Nostalther100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-10-0-pvp-enforced-server" />;
}
