import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-kasteria-server');
}

export default function CurrentKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="current-kasteria-server" />;
}
