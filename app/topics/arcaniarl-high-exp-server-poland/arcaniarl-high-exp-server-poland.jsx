import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-high-exp-server-poland');
}

export default function ArcaniarlHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-high-exp-server-poland" />;
}
