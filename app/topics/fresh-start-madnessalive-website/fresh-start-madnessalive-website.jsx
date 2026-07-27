import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-madnessalive-website');
}

export default function FreshStartMadnessaliveWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-madnessalive-website" />;
}
