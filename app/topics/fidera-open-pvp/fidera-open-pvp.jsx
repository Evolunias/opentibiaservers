import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fidera-open-pvp');
}

export default function FideraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="fidera-open-pvp" />;
}
