import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-evo-server-mexico');
}

export default function DemolidoresEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="demolidores-evo-server-mexico" />;
}
