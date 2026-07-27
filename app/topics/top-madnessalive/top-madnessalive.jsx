import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-madnessalive');
}

export default function TopMadnessaliveKeywordPage() {
  return <StaticKeywordPage slug="top-madnessalive" />;
}
