import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-high-exp-server-europe');
}

export default function TrashformersHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="trashformers-high-exp-server-europe" />;
}
