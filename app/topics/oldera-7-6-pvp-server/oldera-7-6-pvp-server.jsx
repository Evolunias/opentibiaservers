import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-6-pvp-server');
}

export default function Oldera76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-6-pvp-server" />;
}
