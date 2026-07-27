import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-no-reset-server-france');
}

export default function TrashformersNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="trashformers-no-reset-server-france" />;
}
