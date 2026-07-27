import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-poland');
}

export default function EvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evo-server-poland" />;
}
