import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibianus-login');
}

export default function PopularTibianusLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-tibianus-login" />;
}
