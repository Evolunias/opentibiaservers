import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-14-pvp-server');
}

export default function Oldera14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-14-pvp-server" />;
}
