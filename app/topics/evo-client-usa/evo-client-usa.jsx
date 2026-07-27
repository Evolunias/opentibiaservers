import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-client-usa');
}

export default function EvoClientUsaKeywordPage() {
  return <StaticKeywordPage slug="evo-client-usa" />;
}
