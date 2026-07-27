import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-high-exp-server-argentina');
}

export default function NtoStarHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-high-exp-server-argentina" />;
}
