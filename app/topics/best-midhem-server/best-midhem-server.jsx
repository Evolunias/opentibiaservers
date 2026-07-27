import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-midhem-server');
}

export default function BestMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="best-midhem-server" />;
}
