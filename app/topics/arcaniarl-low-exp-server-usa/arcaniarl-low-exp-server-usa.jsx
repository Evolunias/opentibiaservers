import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-low-exp-server-usa');
}

export default function ArcaniarlLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-low-exp-server-usa" />;
}
