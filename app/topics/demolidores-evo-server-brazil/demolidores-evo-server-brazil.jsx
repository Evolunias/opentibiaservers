import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-evo-server-brazil');
}

export default function DemolidoresEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="demolidores-evo-server-brazil" />;
}
