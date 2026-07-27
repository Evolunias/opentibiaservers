import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nto-star-ots');
}

export default function LowrateNtoStarOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nto-star-ots" />;
}
