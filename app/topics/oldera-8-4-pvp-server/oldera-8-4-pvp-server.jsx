import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-4-pvp-server');
}

export default function Oldera84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-4-pvp-server" />;
}
