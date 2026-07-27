import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-retro-server-mexico');
}

export default function MiracleRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="miracle-retro-server-mexico" />;
}
