import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-mist-of-death-website');
}

export default function PopularMistOfDeathWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-mist-of-death-website" />;
}
