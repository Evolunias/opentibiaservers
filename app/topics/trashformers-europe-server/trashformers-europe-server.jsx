import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-europe-server');
}

export default function TrashformersEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-europe-server" />;
}
