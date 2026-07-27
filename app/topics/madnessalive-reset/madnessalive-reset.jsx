import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-reset');
}

export default function MadnessaliveResetKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-reset" />;
}
