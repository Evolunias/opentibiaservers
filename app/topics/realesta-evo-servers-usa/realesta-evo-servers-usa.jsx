import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-evo-servers-usa');
}

export default function RealestaEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="realesta-evo-servers-usa" />;
}
