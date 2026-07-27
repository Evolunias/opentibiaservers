import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-low-exp-server-mexico');
}

export default function DemolidoresLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="demolidores-low-exp-server-mexico" />;
}
