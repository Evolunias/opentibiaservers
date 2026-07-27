import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-evo-servers-brazil');
}

export default function DemolidoresEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="demolidores-evo-servers-brazil" />;
}
