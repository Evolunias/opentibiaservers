import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-fresh-start-server-brazil');
}

export default function CanobFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="canob-fresh-start-server-brazil" />;
}
