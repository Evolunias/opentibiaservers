import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realesta-ot');
}

export default function PopularRealestaOtKeywordPage() {
  return <StaticKeywordPage slug="popular-realesta-ot" />;
}
