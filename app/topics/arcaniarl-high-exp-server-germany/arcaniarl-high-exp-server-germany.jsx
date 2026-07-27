import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-high-exp-server-germany');
}

export default function ArcaniarlHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-high-exp-server-germany" />;
}
