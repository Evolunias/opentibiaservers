import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-15-pvp-server');
}

export default function Oldera15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-15-pvp-server" />;
}
