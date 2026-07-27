import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-54-non-pvp-server');
}

export default function Rubinot854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-54-non-pvp-server" />;
}
