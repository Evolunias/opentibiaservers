import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-blazera-ot');
}

export default function BestBlazeraOtKeywordPage() {
  return <StaticKeywordPage slug="best-blazera-ot" />;
}
