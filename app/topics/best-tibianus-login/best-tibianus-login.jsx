import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibianus-login');
}

export default function BestTibianusLoginKeywordPage() {
  return <StaticKeywordPage slug="best-tibianus-login" />;
}
