import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiascape');
}

export default function CurrentTibiascapeKeywordPage() {
  return <StaticKeywordPage slug="current-tibiascape" />;
}
