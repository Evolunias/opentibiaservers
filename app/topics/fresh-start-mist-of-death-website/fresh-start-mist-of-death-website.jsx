import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-mist-of-death-website');
}

export default function FreshStartMistOfDeathWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-mist-of-death-website" />;
}
