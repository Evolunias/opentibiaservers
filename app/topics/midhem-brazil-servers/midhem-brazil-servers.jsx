import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-brazil-servers');
}

export default function MidhemBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-brazil-servers" />;
}
