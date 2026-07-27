import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-14-non-pvp-server');
}

export default function Oldera14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-14-non-pvp-server" />;
}
