import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape');
}

export default function TibiascapeKeywordPage() {
  return <StaticKeywordPage slug="tibiascape" />;
}
