import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-4-non-pvp-server');
}

export default function Rubinot84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-4-non-pvp-server" />;
}
