import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-evo-server-germany');
}

export default function OlderaEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oldera-evo-server-germany" />;
}
