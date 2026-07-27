import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-high-exp-server-mexico');
}

export default function DemolidoresHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="demolidores-high-exp-server-mexico" />;
}
