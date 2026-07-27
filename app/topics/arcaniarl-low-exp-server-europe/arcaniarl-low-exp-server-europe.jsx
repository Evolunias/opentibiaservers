import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-low-exp-server-europe');
}

export default function ArcaniarlLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-low-exp-server-europe" />;
}
