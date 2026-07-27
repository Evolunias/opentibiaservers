import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-72-pvp-server');
}

export default function Oldera772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-72-pvp-server" />;
}
