import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-11-pvp-server');
}

export default function Rubinot11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-11-pvp-server" />;
}
