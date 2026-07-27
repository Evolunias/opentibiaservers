import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-4-pvp-server');
}

export default function Rubinot74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-4-pvp-server" />;
}
