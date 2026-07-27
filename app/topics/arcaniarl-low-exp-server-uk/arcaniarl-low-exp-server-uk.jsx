import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-low-exp-server-uk');
}

export default function ArcaniarlLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-low-exp-server-uk" />;
}
