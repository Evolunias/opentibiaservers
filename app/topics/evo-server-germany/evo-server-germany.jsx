import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-germany');
}

export default function EvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evo-server-germany" />;
}
