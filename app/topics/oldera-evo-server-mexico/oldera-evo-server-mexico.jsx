import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-evo-server-mexico');
}

export default function OlderaEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oldera-evo-server-mexico" />;
}
