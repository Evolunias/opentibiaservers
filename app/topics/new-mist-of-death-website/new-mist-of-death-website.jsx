import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-mist-of-death-website');
}

export default function NewMistOfDeathWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-mist-of-death-website" />;
}
