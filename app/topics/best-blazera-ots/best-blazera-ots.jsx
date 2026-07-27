import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-blazera-ots');
}

export default function BestBlazeraOtsKeywordPage() {
  return <StaticKeywordPage slug="best-blazera-ots" />;
}
