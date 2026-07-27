import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-72-pvp-server');
}

export default function Rubinot772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-72-pvp-server" />;
}
