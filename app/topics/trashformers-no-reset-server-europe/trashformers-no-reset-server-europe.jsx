import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-no-reset-server-europe');
}

export default function TrashformersNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="trashformers-no-reset-server-europe" />;
}
