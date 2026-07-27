import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-madnessalive-website');
}

export default function ActiveMadnessaliveWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-madnessalive-website" />;
}
