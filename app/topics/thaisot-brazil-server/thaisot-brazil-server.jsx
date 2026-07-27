import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-brazil-server');
}

export default function ThaisotBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-brazil-server" />;
}
