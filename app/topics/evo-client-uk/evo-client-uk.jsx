import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-client-uk');
}

export default function EvoClientUkKeywordPage() {
  return <StaticKeywordPage slug="evo-client-uk" />;
}
