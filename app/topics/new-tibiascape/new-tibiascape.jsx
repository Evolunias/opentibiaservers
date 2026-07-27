import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiascape');
}

export default function NewTibiascapeKeywordPage() {
  return <StaticKeywordPage slug="new-tibiascape" />;
}
