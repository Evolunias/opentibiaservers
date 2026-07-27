import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-argentina-server');
}

export default function MidhemArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-argentina-server" />;
}
