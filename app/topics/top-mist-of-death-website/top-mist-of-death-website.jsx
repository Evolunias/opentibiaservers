import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-mist-of-death-website');
}

export default function TopMistOfDeathWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-mist-of-death-website" />;
}
