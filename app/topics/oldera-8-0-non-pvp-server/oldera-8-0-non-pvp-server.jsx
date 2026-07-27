import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-0-non-pvp-server');
}

export default function Oldera80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-0-non-pvp-server" />;
}
