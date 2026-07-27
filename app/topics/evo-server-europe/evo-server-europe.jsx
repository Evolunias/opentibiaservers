import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-europe');
}

export default function EvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evo-server-europe" />;
}
