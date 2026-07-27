import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-trashformers-server');
}

export default function SeasonalTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-trashformers-server" />;
}
