import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star');
}

export default function NtoStarKeywordPage() {
  return <StaticKeywordPage slug="nto-star" />;
}
