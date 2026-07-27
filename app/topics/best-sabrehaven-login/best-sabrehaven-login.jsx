import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-sabrehaven-login');
}

export default function BestSabrehavenLoginKeywordPage() {
  return <StaticKeywordPage slug="best-sabrehaven-login" />;
}
