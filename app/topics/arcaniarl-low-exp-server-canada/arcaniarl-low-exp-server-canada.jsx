import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-low-exp-server-canada');
}

export default function ArcaniarlLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-low-exp-server-canada" />;
}
