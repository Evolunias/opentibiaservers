import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvpe-server-france');
}

export default function TrashformersPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvpe-server-france" />;
}
