import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-evo-server-europe');
}

export default function OlderaEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oldera-evo-server-europe" />;
}
