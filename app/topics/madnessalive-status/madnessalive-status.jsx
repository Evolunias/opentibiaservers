import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-status');
}

export default function MadnessaliveStatusKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-status" />;
}
