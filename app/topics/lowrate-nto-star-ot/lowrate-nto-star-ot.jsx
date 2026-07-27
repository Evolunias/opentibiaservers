import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nto-star-ot');
}

export default function LowrateNtoStarOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nto-star-ot" />;
}
