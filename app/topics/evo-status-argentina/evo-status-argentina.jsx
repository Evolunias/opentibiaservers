import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-status-argentina');
}

export default function EvoStatusArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evo-status-argentina" />;
}
