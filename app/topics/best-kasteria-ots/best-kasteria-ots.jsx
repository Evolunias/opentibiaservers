import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-kasteria-ots');
}

export default function BestKasteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="best-kasteria-ots" />;
}
