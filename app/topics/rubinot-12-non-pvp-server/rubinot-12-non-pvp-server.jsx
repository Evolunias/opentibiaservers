import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-12-non-pvp-server');
}

export default function Rubinot12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-12-non-pvp-server" />;
}
