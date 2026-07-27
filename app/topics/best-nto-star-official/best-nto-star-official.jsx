import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nto-star-official');
}

export default function BestNtoStarOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-nto-star-official" />;
}
