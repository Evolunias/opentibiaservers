import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-baiak-server-france');
}

export default function TrashformersBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="trashformers-baiak-server-france" />;
}
