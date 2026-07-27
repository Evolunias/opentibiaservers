import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-ot');
}

export default function NtoStarOtKeywordPage() {
  return <StaticKeywordPage slug="nto-star-ot" />;
}
