import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-1-non-pvp-server');
}

export default function Oldera81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-1-non-pvp-server" />;
}
