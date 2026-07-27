import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nto-star');
}

export default function CustomNtoStarKeywordPage() {
  return <StaticKeywordPage slug="custom-nto-star" />;
}
