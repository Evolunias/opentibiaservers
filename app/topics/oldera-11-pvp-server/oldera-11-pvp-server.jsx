import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-pvp-server');
}

export default function Oldera11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-pvp-server" />;
}
