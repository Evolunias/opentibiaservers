import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-9-6-pvp-server');
}

export default function Rubinot96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-9-6-pvp-server" />;
}
