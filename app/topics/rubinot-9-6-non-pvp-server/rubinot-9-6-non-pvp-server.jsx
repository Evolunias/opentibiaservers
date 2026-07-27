import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-9-6-non-pvp-server');
}

export default function Rubinot96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-9-6-non-pvp-server" />;
}
