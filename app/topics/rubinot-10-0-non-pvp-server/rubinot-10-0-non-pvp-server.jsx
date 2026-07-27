import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-0-non-pvp-server');
}

export default function Rubinot100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-0-non-pvp-server" />;
}
