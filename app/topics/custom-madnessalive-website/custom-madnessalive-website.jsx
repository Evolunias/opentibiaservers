import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-madnessalive-website');
}

export default function CustomMadnessaliveWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-madnessalive-website" />;
}
