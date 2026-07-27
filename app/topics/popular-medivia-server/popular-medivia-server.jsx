import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-medivia-server');
}

export default function PopularMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="popular-medivia-server" />;
}
