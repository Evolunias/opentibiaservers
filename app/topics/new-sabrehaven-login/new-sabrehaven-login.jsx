import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-sabrehaven-login');
}

export default function NewSabrehavenLoginKeywordPage() {
  return <StaticKeywordPage slug="new-sabrehaven-login" />;
}
