import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-evo-server-canada');
}

export default function DemolidoresEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-evo-server-canada" />;
}
