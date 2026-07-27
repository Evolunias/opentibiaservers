import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realera-ot');
}

export default function BestRealeraOtKeywordPage() {
  return <StaticKeywordPage slug="best-realera-ot" />;
}
