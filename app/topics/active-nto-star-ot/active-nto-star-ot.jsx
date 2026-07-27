import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nto-star-ot');
}

export default function ActiveNtoStarOtKeywordPage() {
  return <StaticKeywordPage slug="active-nto-star-ot" />;
}
