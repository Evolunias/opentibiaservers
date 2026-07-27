import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-retro-server-europe');
}

export default function TrashformersRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="trashformers-retro-server-europe" />;
}
