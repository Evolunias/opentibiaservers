import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realera-login');
}

export default function PopularRealeraLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-realera-login" />;
}
