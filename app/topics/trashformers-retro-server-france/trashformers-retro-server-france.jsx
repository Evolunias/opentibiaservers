import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-retro-server-france');
}

export default function TrashformersRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="trashformers-retro-server-france" />;
}
