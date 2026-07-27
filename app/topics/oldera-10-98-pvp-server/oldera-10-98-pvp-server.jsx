import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-98-pvp-server');
}

export default function Oldera1098PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-98-pvp-server" />;
}
