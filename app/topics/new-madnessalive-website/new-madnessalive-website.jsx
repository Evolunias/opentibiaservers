import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-madnessalive-website');
}

export default function NewMadnessaliveWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-madnessalive-website" />;
}
