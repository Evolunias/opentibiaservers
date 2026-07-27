import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-evo-server-europe');
}

export default function DemolidoresEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="demolidores-evo-server-europe" />;
}
