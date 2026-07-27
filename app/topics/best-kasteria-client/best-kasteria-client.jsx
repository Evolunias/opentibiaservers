import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-kasteria-client');
}

export default function BestKasteriaClientKeywordPage() {
  return <StaticKeywordPage slug="best-kasteria-client" />;
}
