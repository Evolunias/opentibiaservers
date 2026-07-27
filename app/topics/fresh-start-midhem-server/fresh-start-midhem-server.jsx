import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-midhem-server');
}

export default function FreshStartMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-midhem-server" />;
}
