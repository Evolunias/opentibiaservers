import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-uk');
}

export default function EvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="evo-server-uk" />;
}
