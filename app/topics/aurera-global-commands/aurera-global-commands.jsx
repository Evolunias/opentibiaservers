import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-commands');
}

export default function AureraGlobalCommandsKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-commands" />;
}
