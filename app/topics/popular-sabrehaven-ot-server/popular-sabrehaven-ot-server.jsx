import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-sabrehaven-ot-server');
}

export default function PopularSabrehavenOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-sabrehaven-ot-server" />;
}
