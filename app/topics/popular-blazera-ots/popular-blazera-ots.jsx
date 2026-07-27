import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-blazera-ots');
}

export default function PopularBlazeraOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-blazera-ots" />;
}
