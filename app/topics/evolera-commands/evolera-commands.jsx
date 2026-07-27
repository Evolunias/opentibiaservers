import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-commands');
}

export default function EvoleraCommandsKeywordPage() {
  return <StaticKeywordPage slug="evolera-commands" />;
}
