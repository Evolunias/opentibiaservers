import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-kasteria-client');
}

export default function CurrentKasteriaClientKeywordPage() {
  return <StaticKeywordPage slug="current-kasteria-client" />;
}
