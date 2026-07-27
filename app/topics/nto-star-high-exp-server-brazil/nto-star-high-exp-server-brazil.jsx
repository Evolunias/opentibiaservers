import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-high-exp-server-brazil');
}

export default function NtoStarHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nto-star-high-exp-server-brazil" />;
}
