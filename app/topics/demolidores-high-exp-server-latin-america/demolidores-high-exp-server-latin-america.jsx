import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-high-exp-server-latin-america');
}

export default function DemolidoresHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-high-exp-server-latin-america" />;
}
