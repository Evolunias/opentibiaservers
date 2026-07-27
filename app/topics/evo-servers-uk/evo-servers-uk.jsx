import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-servers-uk');
}

export default function EvoServersUkKeywordPage() {
  return <StaticKeywordPage slug="evo-servers-uk" />;
}
