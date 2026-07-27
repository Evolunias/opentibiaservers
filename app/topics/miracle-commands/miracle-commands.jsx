import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-commands');
}

export default function MiracleCommandsKeywordPage() {
  return <StaticKeywordPage slug="miracle-commands" />;
}
