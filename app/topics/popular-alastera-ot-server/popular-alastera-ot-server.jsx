import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-alastera-ot-server');
}

export default function PopularAlasteraOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-alastera-ot-server" />;
}
