import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-baiak-server-south-america');
}

export default function TrashformersBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-baiak-server-south-america" />;
}
