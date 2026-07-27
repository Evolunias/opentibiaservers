import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-client-europe');
}

export default function EvoClientEuropeKeywordPage() {
  return <StaticKeywordPage slug="evo-client-europe" />;
}
