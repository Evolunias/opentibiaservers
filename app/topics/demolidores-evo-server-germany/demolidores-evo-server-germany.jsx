import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-evo-server-germany');
}

export default function DemolidoresEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="demolidores-evo-server-germany" />;
}
