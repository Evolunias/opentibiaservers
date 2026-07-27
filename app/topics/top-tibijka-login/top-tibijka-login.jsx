import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibijka-login');
}

export default function TopTibijkaLoginKeywordPage() {
  return <StaticKeywordPage slug="top-tibijka-login" />;
}
