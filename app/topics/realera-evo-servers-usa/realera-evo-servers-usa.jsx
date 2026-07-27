import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-evo-servers-usa');
}

export default function RealeraEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="realera-evo-servers-usa" />;
}
