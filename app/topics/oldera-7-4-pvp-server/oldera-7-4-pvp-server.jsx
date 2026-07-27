import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-4-pvp-server');
}

export default function Oldera74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-4-pvp-server" />;
}
