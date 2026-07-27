import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-9-6-pvp-server');
}

export default function Oldera96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-9-6-pvp-server" />;
}
