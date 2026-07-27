import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-98-non-pvp-server');
}

export default function Rubinot1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-98-non-pvp-server" />;
}
