import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-madnessalive-website');
}

export default function LowrateMadnessaliveWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-madnessalive-website" />;
}
