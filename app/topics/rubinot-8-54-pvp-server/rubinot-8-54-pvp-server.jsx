import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-54-pvp-server');
}

export default function Rubinot854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-54-pvp-server" />;
}
