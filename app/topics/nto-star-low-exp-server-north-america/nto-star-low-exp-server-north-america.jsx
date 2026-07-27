import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-low-exp-server-north-america');
}

export default function NtoStarLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-low-exp-server-north-america" />;
}
