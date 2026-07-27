import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibijka-official');
}

export default function TopTibijkaOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-tibijka-official" />;
}
