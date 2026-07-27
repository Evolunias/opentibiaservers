import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-1-non-pvp-server');
}

export default function Rubinot81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-1-non-pvp-server" />;
}
