import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-retro-server-argentina');
}

export default function MiracleRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="miracle-retro-server-argentina" />;
}
