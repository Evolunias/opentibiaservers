import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-north-america-server');
}

export default function TrashformersNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-north-america-server" />;
}
