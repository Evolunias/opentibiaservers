import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-server');
}

export default function MidhemServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-server" />;
}
