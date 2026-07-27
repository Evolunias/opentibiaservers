import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-low-exp-server-brazil');
}

export default function NtoStarLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nto-star-low-exp-server-brazil" />;
}
