import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-sweden-server');
}

export default function MidhemSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-sweden-server" />;
}
