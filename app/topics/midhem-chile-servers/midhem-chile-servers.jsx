import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-chile-servers');
}

export default function MidhemChileServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-chile-servers" />;
}
