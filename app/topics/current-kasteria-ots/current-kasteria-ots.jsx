import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-kasteria-ots');
}

export default function CurrentKasteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="current-kasteria-ots" />;
}
