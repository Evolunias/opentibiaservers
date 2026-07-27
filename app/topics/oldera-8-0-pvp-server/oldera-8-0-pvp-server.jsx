import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-0-pvp-server');
}

export default function Oldera80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-0-pvp-server" />;
}
