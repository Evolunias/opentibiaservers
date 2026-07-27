import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-evo-server-uk');
}

export default function OlderaEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="oldera-evo-server-uk" />;
}
