import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-evo-server-usa');
}

export default function OlderaEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oldera-evo-server-usa" />;
}
