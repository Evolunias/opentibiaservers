import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nto-star');
}

export default function ActiveNtoStarKeywordPage() {
  return <StaticKeywordPage slug="active-nto-star" />;
}
