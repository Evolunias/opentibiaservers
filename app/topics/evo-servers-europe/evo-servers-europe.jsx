import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-servers-europe');
}

export default function EvoServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="evo-servers-europe" />;
}
