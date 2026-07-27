import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-low-exp-server-brazil');
}

export default function DemolidoresLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="demolidores-low-exp-server-brazil" />;
}
