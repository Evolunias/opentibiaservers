import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-retro-server-latin-america');
}

export default function MiracleRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-retro-server-latin-america" />;
}
