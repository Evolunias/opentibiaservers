import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-kasteria-login');
}

export default function BestKasteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="best-kasteria-login" />;
}
