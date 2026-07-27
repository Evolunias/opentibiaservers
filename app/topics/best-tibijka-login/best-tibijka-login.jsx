import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibijka-login');
}

export default function BestTibijkaLoginKeywordPage() {
  return <StaticKeywordPage slug="best-tibijka-login" />;
}
