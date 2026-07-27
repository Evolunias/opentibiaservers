import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realera-ot');
}

export default function PopularRealeraOtKeywordPage() {
  return <StaticKeywordPage slug="popular-realera-ot" />;
}
