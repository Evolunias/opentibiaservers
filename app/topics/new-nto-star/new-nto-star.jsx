import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nto-star');
}

export default function NewNtoStarKeywordPage() {
  return <StaticKeywordPage slug="new-nto-star" />;
}
