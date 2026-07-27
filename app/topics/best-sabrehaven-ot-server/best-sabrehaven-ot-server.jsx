import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-sabrehaven-ot-server');
}

export default function BestSabrehavenOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-sabrehaven-ot-server" />;
}
