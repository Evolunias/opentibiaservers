import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-1-pvp-server');
}

export default function Oldera71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-1-pvp-server" />;
}
