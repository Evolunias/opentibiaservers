import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-servers-usa');
}

export default function EvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="evo-servers-usa" />;
}
