import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-0-pvp-server');
}

export default function Oldera100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-0-pvp-server" />;
}
