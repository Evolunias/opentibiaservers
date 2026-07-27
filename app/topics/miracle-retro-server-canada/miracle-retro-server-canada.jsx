import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-retro-server-canada');
}

export default function MiracleRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="miracle-retro-server-canada" />;
}
