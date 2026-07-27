import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-commands');
}

export default function MidhemCommandsKeywordPage() {
  return <StaticKeywordPage slug="midhem-commands" />;
}
