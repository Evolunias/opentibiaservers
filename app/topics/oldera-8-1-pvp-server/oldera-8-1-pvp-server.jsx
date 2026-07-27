import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-1-pvp-server');
}

export default function Oldera81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-1-pvp-server" />;
}
