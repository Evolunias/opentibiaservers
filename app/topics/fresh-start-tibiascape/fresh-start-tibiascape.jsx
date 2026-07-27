import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiascape');
}

export default function FreshStartTibiascapeKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiascape" />;
}
