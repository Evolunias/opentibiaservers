import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-high-exp-server-brazil');
}

export default function DemolidoresHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="demolidores-high-exp-server-brazil" />;
}
