import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-4-non-pvp-server');
}

export default function Oldera74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-4-non-pvp-server" />;
}
