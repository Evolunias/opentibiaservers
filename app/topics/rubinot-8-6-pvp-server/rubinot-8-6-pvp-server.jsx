import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-6-pvp-server');
}

export default function Rubinot86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-6-pvp-server" />;
}
