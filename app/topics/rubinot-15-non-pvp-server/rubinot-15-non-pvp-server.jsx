import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-15-non-pvp-server');
}

export default function Rubinot15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-15-non-pvp-server" />;
}
