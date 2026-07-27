import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-madnessalive-website');
}

export default function CurrentMadnessaliveWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-madnessalive-website" />;
}
