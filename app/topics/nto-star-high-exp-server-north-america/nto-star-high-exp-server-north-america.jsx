import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-high-exp-server-north-america');
}

export default function NtoStarHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-high-exp-server-north-america" />;
}
