import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-madnessalive-client');
}

export default function FreshStartMadnessaliveClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-madnessalive-client" />;
}
