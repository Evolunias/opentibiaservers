import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-11-pvp-server');
}

export default function Nostalther11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-11-pvp-server" />;
}
