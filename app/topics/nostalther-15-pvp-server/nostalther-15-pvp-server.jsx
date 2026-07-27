import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-15-pvp-server');
}

export default function Nostalther15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-15-pvp-server" />;
}
