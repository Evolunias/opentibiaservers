import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-medivia-login');
}

export default function PopularMediviaLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-medivia-login" />;
}
