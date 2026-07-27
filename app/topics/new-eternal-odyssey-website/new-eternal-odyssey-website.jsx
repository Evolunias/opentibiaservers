import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eternal-odyssey-website');
}

export default function NewEternalOdysseyWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-eternal-odyssey-website" />;
}
