import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-mist-of-death-website');
}

export default function CustomMistOfDeathWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-mist-of-death-website" />;
}
