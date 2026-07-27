import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-1-pvp-server');
}

export default function Nostalther71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-1-pvp-server" />;
}
