import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-high-exp');
}

export default function EvoServerHighExpKeywordPage() {
  return <StaticKeywordPage slug="evo-server-high-exp" />;
}
