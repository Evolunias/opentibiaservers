import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-argentina-servers');
}

export default function MidhemArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-argentina-servers" />;
}
