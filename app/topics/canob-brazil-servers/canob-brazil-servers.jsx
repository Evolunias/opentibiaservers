import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-brazil-servers');
}

export default function CanobBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="canob-brazil-servers" />;
}
