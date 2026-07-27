import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-72-non-pvp-server');
}

export default function Rubinot772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-72-non-pvp-server" />;
}
