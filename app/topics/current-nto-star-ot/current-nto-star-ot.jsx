import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nto-star-ot');
}

export default function CurrentNtoStarOtKeywordPage() {
  return <StaticKeywordPage slug="current-nto-star-ot" />;
}
