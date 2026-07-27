import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-evo-servers-usa');
}

export default function DemolidoresEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-evo-servers-usa" />;
}
