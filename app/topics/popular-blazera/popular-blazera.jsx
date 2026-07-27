import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-blazera');
}

export default function PopularBlazeraKeywordPage() {
  return <StaticKeywordPage slug="popular-blazera" />;
}
