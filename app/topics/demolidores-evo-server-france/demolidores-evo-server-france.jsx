import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-evo-server-france');
}

export default function DemolidoresEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="demolidores-evo-server-france" />;
}
