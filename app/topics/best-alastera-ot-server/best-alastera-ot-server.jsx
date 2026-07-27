import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-alastera-ot-server');
}

export default function BestAlasteraOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-alastera-ot-server" />;
}
