import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-brazil-servers');
}

export default function ThaisotBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-brazil-servers" />;
}
