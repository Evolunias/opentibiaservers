import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-midhem-server');
}

export default function LowExpMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-midhem-server" />;
}
