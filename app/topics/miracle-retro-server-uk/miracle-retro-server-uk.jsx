import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-retro-server-uk');
}

export default function MiracleRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="miracle-retro-server-uk" />;
}
