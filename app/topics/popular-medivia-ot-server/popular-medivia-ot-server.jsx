import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-medivia-ot-server');
}

export default function PopularMediviaOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-medivia-ot-server" />;
}
