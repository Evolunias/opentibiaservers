import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-fresh-start-server-latin-america');
}

export default function DemolidoresFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-fresh-start-server-latin-america" />;
}
