import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiascape');
}

export default function LowrateTibiascapeKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiascape" />;
}
