import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-sweden-servers');
}

export default function MidhemSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-sweden-servers" />;
}
