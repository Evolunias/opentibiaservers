import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-high-exp-server-latin-america');
}

export default function MiracleHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-high-exp-server-latin-america" />;
}
