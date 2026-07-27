import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiantis-login');
}

export default function BestTibiantisLoginKeywordPage() {
  return <StaticKeywordPage slug="best-tibiantis-login" />;
}
