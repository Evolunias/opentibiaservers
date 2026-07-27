import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-kasteria-login');
}

export default function CurrentKasteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="current-kasteria-login" />;
}
