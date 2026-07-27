import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realesta');
}

export default function BestRealestaKeywordPage() {
  return <StaticKeywordPage slug="best-realesta" />;
}
