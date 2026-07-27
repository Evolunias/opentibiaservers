import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-0-pvp-server');
}

export default function Rubinot80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-0-pvp-server" />;
}
