import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-commands');
}

export default function TrashformersCommandsKeywordPage() {
  return <StaticKeywordPage slug="trashformers-commands" />;
}
