import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-6-non-pvp-server');
}

export default function Oldera86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-6-non-pvp-server" />;
}
