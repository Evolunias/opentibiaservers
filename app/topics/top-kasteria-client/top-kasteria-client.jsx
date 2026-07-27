import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-kasteria-client');
}

export default function TopKasteriaClientKeywordPage() {
  return <StaticKeywordPage slug="top-kasteria-client" />;
}
