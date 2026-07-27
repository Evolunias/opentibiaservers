import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-blazera-ot');
}

export default function PopularBlazeraOtKeywordPage() {
  return <StaticKeywordPage slug="popular-blazera-ot" />;
}
