import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-evo-server-canada');
}

export default function OlderaEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oldera-evo-server-canada" />;
}
