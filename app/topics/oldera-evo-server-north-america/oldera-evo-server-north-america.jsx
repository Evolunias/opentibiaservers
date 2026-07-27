import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-evo-server-north-america');
}

export default function OlderaEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-evo-server-north-america" />;
}
