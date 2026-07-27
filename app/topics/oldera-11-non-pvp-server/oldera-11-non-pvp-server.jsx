import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-non-pvp-server');
}

export default function Oldera11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-non-pvp-server" />;
}
