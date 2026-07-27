import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiascape-login');
}

export default function PopularTibiascapeLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiascape-login" />;
}
