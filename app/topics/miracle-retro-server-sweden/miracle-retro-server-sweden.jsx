import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-retro-server-sweden');
}

export default function MiracleRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="miracle-retro-server-sweden" />;
}
