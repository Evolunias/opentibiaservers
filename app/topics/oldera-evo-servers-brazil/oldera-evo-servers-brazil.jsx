import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-evo-servers-brazil');
}

export default function OlderaEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="oldera-evo-servers-brazil" />;
}
