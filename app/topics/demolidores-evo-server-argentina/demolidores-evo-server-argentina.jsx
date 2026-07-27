import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-evo-server-argentina');
}

export default function DemolidoresEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-evo-server-argentina" />;
}
