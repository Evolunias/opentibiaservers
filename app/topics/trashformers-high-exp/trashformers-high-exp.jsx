import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-high-exp');
}

export default function TrashformersHighExpKeywordPage() {
  return <StaticKeywordPage slug="trashformers-high-exp" />;
}
