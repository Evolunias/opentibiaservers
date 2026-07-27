import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-madnessalive');
}

export default function FreshStartMadnessaliveKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-madnessalive" />;
}
