import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-evo-servers-usa');
}

export default function OlderaEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="oldera-evo-servers-usa" />;
}
