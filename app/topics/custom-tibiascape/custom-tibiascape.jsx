import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiascape');
}

export default function CustomTibiascapeKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiascape" />;
}
