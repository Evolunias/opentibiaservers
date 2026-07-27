import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-brazil-server');
}

export default function MidhemBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-brazil-server" />;
}
