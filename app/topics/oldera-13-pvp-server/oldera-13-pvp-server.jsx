import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-13-pvp-server');
}

export default function Oldera13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-13-pvp-server" />;
}
