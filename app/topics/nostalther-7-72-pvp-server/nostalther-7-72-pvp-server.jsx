import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-72-pvp-server');
}

export default function Nostalther772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-72-pvp-server" />;
}
