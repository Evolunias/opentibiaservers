import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-madnessalive-website');
}

export default function BestMadnessaliveWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-madnessalive-website" />;
}
