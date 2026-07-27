import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-sabrehaven-login');
}

export default function CustomSabrehavenLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-sabrehaven-login" />;
}
