import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-kasteria-server');
}

export default function TopKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="top-kasteria-server" />;
}
