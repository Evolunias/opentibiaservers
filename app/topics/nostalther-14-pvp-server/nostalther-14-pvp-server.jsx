import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-14-pvp-server');
}

export default function Nostalther14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-14-pvp-server" />;
}
