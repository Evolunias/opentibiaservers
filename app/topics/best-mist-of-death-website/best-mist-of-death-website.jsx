import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-mist-of-death-website');
}

export default function BestMistOfDeathWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-mist-of-death-website" />;
}
