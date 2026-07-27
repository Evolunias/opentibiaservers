import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realera-ots');
}

export default function PopularRealeraOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-realera-ots" />;
}
