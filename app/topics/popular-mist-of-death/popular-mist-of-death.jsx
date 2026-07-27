import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-mist-of-death');
}

export default function PopularMistOfDeathKeywordPage() {
  return <StaticKeywordPage slug="popular-mist-of-death" />;
}
