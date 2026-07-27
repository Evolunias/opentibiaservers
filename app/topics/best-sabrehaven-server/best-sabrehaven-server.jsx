import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-sabrehaven-server');
}

export default function BestSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="best-sabrehaven-server" />;
}
