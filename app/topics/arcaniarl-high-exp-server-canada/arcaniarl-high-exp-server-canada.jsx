import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-high-exp-server-canada');
}

export default function ArcaniarlHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-high-exp-server-canada" />;
}
