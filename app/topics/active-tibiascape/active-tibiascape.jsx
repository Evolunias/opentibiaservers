import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiascape');
}

export default function ActiveTibiascapeKeywordPage() {
  return <StaticKeywordPage slug="active-tibiascape" />;
}
