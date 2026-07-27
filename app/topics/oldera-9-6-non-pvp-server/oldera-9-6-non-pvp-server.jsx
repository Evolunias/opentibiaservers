import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-9-6-non-pvp-server');
}

export default function Oldera96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-9-6-non-pvp-server" />;
}
