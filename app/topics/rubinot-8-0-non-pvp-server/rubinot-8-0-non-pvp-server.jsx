import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-0-non-pvp-server');
}

export default function Rubinot80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-0-non-pvp-server" />;
}
