import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-high-exp-server-argentina');
}

export default function ArcaniarlHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-high-exp-server-argentina" />;
}
