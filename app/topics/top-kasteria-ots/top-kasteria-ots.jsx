import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-kasteria-ots');
}

export default function TopKasteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="top-kasteria-ots" />;
}
