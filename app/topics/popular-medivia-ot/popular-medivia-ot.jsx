import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-medivia-ot');
}

export default function PopularMediviaOtKeywordPage() {
  return <StaticKeywordPage slug="popular-medivia-ot" />;
}
