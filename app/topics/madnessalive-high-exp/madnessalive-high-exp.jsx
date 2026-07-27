import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-high-exp');
}

export default function MadnessaliveHighExpKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-high-exp" />;
}
