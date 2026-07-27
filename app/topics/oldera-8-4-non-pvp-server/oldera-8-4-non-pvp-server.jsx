import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-4-non-pvp-server');
}

export default function Oldera84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-4-non-pvp-server" />;
}
