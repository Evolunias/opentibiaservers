import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-midhem-server');
}

export default function HighExpMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-midhem-server" />;
}
