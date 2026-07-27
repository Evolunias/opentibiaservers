import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-1-pvp-server');
}

export default function Eldera81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-1-pvp-server" />;
}
