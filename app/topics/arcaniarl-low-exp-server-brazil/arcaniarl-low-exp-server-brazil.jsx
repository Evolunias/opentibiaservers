import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-low-exp-server-brazil');
}

export default function ArcaniarlLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-low-exp-server-brazil" />;
}
