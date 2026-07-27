import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-11-non-pvp-server');
}

export default function Rubinot11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-11-non-pvp-server" />;
}
