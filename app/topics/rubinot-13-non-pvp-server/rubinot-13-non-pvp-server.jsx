import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-13-non-pvp-server');
}

export default function Rubinot13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-13-non-pvp-server" />;
}
