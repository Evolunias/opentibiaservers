import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-website');
}

export default function MadnessaliveWebsiteKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-website" />;
}
