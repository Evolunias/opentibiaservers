import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-sabrehaven-login');
}

export default function CurrentSabrehavenLoginKeywordPage() {
  return <StaticKeywordPage slug="current-sabrehaven-login" />;
}
