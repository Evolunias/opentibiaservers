import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibijka-login');
}

export default function PopularTibijkaLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-tibijka-login" />;
}
