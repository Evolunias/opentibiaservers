import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-low-exp-server-poland');
}

export default function ArcaniarlLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-low-exp-server-poland" />;
}
