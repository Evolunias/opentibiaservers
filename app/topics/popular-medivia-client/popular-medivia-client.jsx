import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-medivia-client');
}

export default function PopularMediviaClientKeywordPage() {
  return <StaticKeywordPage slug="popular-medivia-client" />;
}
