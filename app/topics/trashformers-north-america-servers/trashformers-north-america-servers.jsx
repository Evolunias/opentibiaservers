import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-north-america-servers');
}

export default function TrashformersNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-north-america-servers" />;
}
