import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-mist-of-death-official');
}

export default function PopularMistOfDeathOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-mist-of-death-official" />;
}
