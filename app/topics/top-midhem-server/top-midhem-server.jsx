import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-midhem-server');
}

export default function TopMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="top-midhem-server" />;
}
