import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-14-non-pvp-server');
}

export default function Rubinot14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-14-non-pvp-server" />;
}
