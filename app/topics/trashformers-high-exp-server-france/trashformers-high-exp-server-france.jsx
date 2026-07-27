import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-high-exp-server-france');
}

export default function TrashformersHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="trashformers-high-exp-server-france" />;
}
