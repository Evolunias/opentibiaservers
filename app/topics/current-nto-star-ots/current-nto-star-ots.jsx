import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nto-star-ots');
}

export default function CurrentNtoStarOtsKeywordPage() {
  return <StaticKeywordPage slug="current-nto-star-ots" />;
}
