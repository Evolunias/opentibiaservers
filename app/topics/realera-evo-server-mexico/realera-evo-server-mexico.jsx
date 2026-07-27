import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-evo-server-mexico');
}

export default function RealeraEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realera-evo-server-mexico" />;
}
