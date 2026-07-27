import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-low-exp-server-germany');
}

export default function ArcaniarlLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-low-exp-server-germany" />;
}
