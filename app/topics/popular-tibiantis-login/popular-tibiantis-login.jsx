import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiantis-login');
}

export default function PopularTibiantisLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiantis-login" />;
}
