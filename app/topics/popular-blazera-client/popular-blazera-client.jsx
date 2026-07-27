import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-blazera-client');
}

export default function PopularBlazeraClientKeywordPage() {
  return <StaticKeywordPage slug="popular-blazera-client" />;
}
