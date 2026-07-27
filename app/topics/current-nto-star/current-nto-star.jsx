import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nto-star');
}

export default function CurrentNtoStarKeywordPage() {
  return <StaticKeywordPage slug="current-nto-star" />;
}
