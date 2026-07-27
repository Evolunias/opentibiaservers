import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-blazera-server');
}

export default function PopularBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="popular-blazera-server" />;
}
