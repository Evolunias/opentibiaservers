import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-sabrehaven-login');
}

export default function TopSabrehavenLoginKeywordPage() {
  return <StaticKeywordPage slug="top-sabrehaven-login" />;
}
