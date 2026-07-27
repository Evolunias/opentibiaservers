import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-madnessalive-website');
}

export default function TopMadnessaliveWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-madnessalive-website" />;
}
