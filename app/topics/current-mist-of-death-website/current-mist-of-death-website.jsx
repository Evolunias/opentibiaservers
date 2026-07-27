import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-mist-of-death-website');
}

export default function CurrentMistOfDeathWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-mist-of-death-website" />;
}
