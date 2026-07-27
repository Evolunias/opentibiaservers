import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-retro-server-south-america');
}

export default function TrashformersRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-retro-server-south-america" />;
}
