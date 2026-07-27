import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-13-pvp-server');
}

export default function Nostalther13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-13-pvp-server" />;
}
