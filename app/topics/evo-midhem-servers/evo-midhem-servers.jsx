import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-midhem-servers');
}

export default function EvoMidhemServersKeywordPage() {
  return <StaticKeywordPage slug="evo-midhem-servers" />;
}
