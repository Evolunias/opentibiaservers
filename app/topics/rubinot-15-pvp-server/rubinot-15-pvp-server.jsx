import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-15-pvp-server');
}

export default function Rubinot15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-15-pvp-server" />;
}
