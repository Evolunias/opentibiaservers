import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nto-star-official');
}

export default function CurrentNtoStarOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-nto-star-official" />;
}
