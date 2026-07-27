import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiascape');
}

export default function TopTibiascapeKeywordPage() {
  return <StaticKeywordPage slug="top-tibiascape" />;
}
