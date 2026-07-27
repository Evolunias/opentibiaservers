import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-commands');
}

export default function MadnessaliveCommandsKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-commands" />;
}
