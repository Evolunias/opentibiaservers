import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-retro-server-sweden');
}

export default function RubinotRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rubinot-retro-server-sweden" />;
}
