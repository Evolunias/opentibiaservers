import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-brazil-server');
}

export default function CanobBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="canob-brazil-server" />;
}
