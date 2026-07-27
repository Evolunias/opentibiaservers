import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-low-exp-server-argentina');
}

export default function NtoStarLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-low-exp-server-argentina" />;
}
