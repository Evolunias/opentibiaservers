import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-15-non-pvp-server');
}

export default function Oldera15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-15-non-pvp-server" />;
}
