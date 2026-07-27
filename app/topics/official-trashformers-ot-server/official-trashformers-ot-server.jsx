import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-trashformers-ot-server');
}

export default function OfficialTrashformersOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-trashformers-ot-server" />;
}
