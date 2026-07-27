import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-no-reset-server-brazil');
}

export default function ArcaniarlNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-no-reset-server-brazil" />;
}
