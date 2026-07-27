import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-blazera-login');
}

export default function PopularBlazeraLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-blazera-login" />;
}
