import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-6-pvp-server');
}

export default function Oldera86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-6-pvp-server" />;
}
