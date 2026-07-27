import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-sabrehaven-login');
}

export default function ActiveSabrehavenLoginKeywordPage() {
  return <StaticKeywordPage slug="active-sabrehaven-login" />;
}
