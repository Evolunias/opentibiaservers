import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive');
}

export default function MadnessaliveKeywordPage() {
  return <StaticKeywordPage slug="madnessalive" />;
}
