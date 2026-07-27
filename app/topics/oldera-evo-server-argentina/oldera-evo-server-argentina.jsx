import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-evo-server-argentina');
}

export default function OlderaEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oldera-evo-server-argentina" />;
}
