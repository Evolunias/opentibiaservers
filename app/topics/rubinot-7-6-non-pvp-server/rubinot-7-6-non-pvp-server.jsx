import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-6-non-pvp-server');
}

export default function Rubinot76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-6-non-pvp-server" />;
}
