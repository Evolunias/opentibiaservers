import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-retro-server-canada');
}

export default function TrashformersRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-retro-server-canada" />;
}
