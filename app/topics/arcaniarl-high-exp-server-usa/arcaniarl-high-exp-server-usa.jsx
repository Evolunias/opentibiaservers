import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-high-exp-server-usa');
}

export default function ArcaniarlHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-high-exp-server-usa" />;
}
