import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-retro-server-brazil');
}

export default function CanobRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="canob-retro-server-brazil" />;
}
