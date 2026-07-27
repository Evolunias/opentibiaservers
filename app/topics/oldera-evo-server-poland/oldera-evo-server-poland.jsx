import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-evo-server-poland');
}

export default function OlderaEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oldera-evo-server-poland" />;
}
