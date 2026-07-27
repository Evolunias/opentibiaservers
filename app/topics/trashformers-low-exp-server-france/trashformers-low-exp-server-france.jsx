import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-low-exp-server-france');
}

export default function TrashformersLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="trashformers-low-exp-server-france" />;
}
