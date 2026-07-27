import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nto-star-ot');
}

export default function CustomNtoStarOtKeywordPage() {
  return <StaticKeywordPage slug="custom-nto-star-ot" />;
}
