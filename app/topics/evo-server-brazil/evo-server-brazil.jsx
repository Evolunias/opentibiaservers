import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-brazil');
}

export default function EvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evo-server-brazil" />;
}
