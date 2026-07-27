import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-commands');
}

export default function ClassicusCommandsKeywordPage() {
  return <StaticKeywordPage slug="classicus-commands" />;
}
