import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-evo-server-latin-america');
}

export default function DemolidoresEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-evo-server-latin-america" />;
}
