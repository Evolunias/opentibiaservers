import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-low-exp-server-argentina');
}

export default function ArcaniarlLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-low-exp-server-argentina" />;
}
