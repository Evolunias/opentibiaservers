import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-canob-official');
}

export default function PopularCanobOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-canob-official" />;
}
