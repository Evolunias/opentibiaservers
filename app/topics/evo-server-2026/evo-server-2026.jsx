import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-2026');
}

export default function EvoServer2026KeywordPage() {
  return <StaticKeywordPage slug="evo-server-2026" />;
}
