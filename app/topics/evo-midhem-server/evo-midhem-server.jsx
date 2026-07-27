import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-midhem-server');
}

export default function EvoMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="evo-midhem-server" />;
}
