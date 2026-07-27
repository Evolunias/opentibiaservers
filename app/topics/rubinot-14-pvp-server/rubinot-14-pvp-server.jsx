import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-14-pvp-server');
}

export default function Rubinot14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-14-pvp-server" />;
}
