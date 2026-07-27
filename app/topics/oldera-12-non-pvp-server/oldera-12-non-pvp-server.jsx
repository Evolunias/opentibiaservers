import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-12-non-pvp-server');
}

export default function Oldera12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-12-non-pvp-server" />;
}
