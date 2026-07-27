import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-evo-server-usa');
}

export default function DemolidoresEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-evo-server-usa" />;
}
