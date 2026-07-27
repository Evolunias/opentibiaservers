import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-commands');
}

export default function UnlineCommandsKeywordPage() {
  return <StaticKeywordPage slug="unline-commands" />;
}
